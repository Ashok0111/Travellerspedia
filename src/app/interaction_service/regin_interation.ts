import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReginInteration {
    private subject = new Subject<any>();
    private subject_register = new Subject<any>();
    show_login(login: boolean) {
        this.subject.next({ boolean: login });
        
    }
    show_registration(registation: boolean) {
        this.subject_register.next({ boolean: registation });
        
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    get_register(): Observable<any> {
        return this.subject_register.asObservable();
    }
}