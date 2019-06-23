import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReginInteration {
    private subject_feed_view = new Subject<any>();

    feed_view(feed_view: boolean) {
        this.subject_feed_view.next({ boolean: feed_view });
        
    }
    getFeedView(): Observable<any> {
        return this.subject_feed_view.asObservable();
    }
}