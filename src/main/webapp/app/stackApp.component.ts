import {Component} from '@angular/core';
import {TraverseInputs} from './traverseInputs';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    selector: 'stack-app',
    template: `
        <h1>Traverse Point Finder</h1>
        <div>
            <label>Stack Diameter (inches)</label>
            <input [(ngModel)]="traverseInputs.stackDiameter" (keyup)="onChanges()" placeholder="Stack Diameter"/>
            <label>Port Depth (inches)</label>
            <input [(ngModel)]="traverseInputs.portDepth" (keyup)="onChanges()" placeholder="Port Depth"/>
            <label>Total Traverse Points</label>
            <input [(ngModel)]="traverseInputs.numberOfPoints" (keyup)="onChanges()" placeholder="Traverse Points"/>
        </div>
        <div *ngIf="completeInput">
            <h2>Stack Profile</h2>
            <h3>Inputs</h3>
            <div><label>Diameter: </label>{{traverseInputs.stackDiameter}}</div>
            <div><label>Port Depth: </label>{{traverseInputs.portDepth}}</div>
            <div><label>Points: </label>{{traverseInputs.numberOfPoints}}</div>
            <h3>Points</h3>
            <div *ngIf="traversePoints">
                <ul *ngFor="let point of traversePoints">
                    <li>{{point}}</li>
                </ul>
            </div>
        </div>
    `
})
export class StackAppComponent {
    traverseInputs: TraverseInputs = {
        stackDiameter: null,
        portDepth: 0,
        numberOfPoints: null,
    };
    completeInput: boolean;
    traversePoints: number[] = [];

    traverseApiUrl = 'api/pointCalcs';

    constructor(private http: Http) { }

    onChanges() {
        if (this.traverseInputs.stackDiameter > 0
            && this.traverseInputs.portDepth >= 0
            && this.traverseInputs.numberOfPoints > 0 ) {
            this.completeInput = true;
            this.getPoints(this.traverseInputs).subscribe((points) => this.traversePoints = points);
        } else {
            this.completeInput = false;
        }
    }

    // .then((response) => response.json().data as number[])
    getPoints(traverseInputs: TraverseInputs): Observable<number[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers });
        return this.http.post(this.traverseApiUrl, traverseInputs, options)
            .map(this.extractData)
            .catch(this.handleError);
    };

    private extractData(res: Response) {
        const body = res.json();
        return body || { };
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
