import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReginInteration {
    private subject_feed_view = new Subject<any>();
    private subject_landing_page = new Subject<any>();
    feed_view(feed_view: boolean) {
        this.subject_feed_view.next({ boolean: feed_view });   
    }
    navbar_landingpage(landing_page: boolean) {
        this.subject_landing_page.next({ boolean: landing_page });
        
    }


    get_navbar_landingpage(): Observable<any> {
        return this.subject_landing_page.asObservable();
    }  
    getFeedView(): Observable<any> {
        return this.subject_feed_view.asObservable();
    }
}