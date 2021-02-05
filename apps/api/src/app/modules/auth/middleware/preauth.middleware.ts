import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import * as serviceAccount from '../idea-incubator-4e136-firebase-adminsdk-cuj98-95dd791a81.json';

const FIREBASE_PARAMS = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url
}

@Injectable()
export class PreauthMiddleware implements NestMiddleware {
  private defaultApp: firebase.app.App;

  constructor() {
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(FIREBASE_PARAMS),
      // databaseURL: "https://fir-auth-bd895.firebaseio.com" // NOTE: Do I Need this? https://firebase.google.com/docs/admin/setup#initialize-sdk
    });
  }

  use(req: Request, res: Response, next: Function) {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.replace('Bearer ', '');

    if (!token || token === null || token === '') {
      throw new UnauthorizedException();
    }

    return this.defaultApp.auth().verifyIdToken(token).then(async decodedToken => {
      const user = {
        email: decodedToken.email
      }
      req['user'] = user;
      next();
    }).catch(error => {
      console.error(error);
      throw new UnauthorizedException();
    });
  }
}
