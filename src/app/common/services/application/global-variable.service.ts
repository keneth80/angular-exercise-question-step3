import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../services/base.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalVariableService {
    remoteUrl = '';

    constructor(
        private http: HttpClient
    ) {
    }

    getConfiguration(): Promise<any> {
        return this.http.get('assets/config/configuration.json')
            .toPromise()
            .then((res: any) => {
                if (console && console.log) {
                    console.log('configuration : ', res);
                }
                this.remoteUrl = res.remote;
                return res;
            });
    }

}
