import { ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";



@Injectable()
export class LocalAuthGard extends AuthGuard('local'){

    
}