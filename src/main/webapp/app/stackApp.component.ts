import {Component} from '@angular/core';
import {TraverseInputs} from './traverseInputs';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
    selector: 'stack-app',
    template: `
        <nav class="navbar navbar-inverse bg-inverse">
            <h1 class="navbar-brand mb-0">Stacktool</h1>
        </nav>
        <div class="card">
            <div class="card-block">
                <h4 class="card-title">Traverse Point Finder</h4>
                <div class="card-block">
                    <div class="form-group">
                        <label>Stack Diameter (inches)</label>
                        <input class="form-control form-control-lg" [(ngModel)]="traverseInputs.stackDiameter" (keyup)="onChanges()" placeholder="Stack Diameter"/>
                    </div>
                    <div class="form-group">
                        <label>Port Depth (inches)</label>
                        <input class="form-control form-control-lg" [(ngModel)]="traverseInputs.portDepth" (keyup)="onChanges()" placeholder="Port Depth"/>
                    </div>
                    <div class="form-group">
                        <label>Total Traverse Points</label>
                        <input class="form-control form-control-lg" [(ngModel)]="traverseInputs.numberOfPoints" (keyup)="onChanges()" placeholder="Traverse Points"/>
                    </div>
                </div>
                <div class="card-block" *ngIf="!serviceError  && traversePoints.length > 0">
                        <h5>Probe Markings (inches):</h5>
                        <div *ngIf="traversePoints">
                            <ul class="list-group" *ngFor="let point of traversePoints">
                                <li class="list-group-item">{{point}}</li>
                            </ul>
                        </div>
                </div>
                <div class="alert alert-danger" role="alert" *ngIf="serviceError">
                    Valid Traverse Points are: 4,8,12,16,20,24.
                    {{serviceError}}
                </div>
                
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
    serviceError: String = 'hey';
    traversePoints: number[] = [];

    traverseApiUrl = 'api/pointCalcs';

    constructor(private http: Http) { }

    onChanges() {
        if (this.traverseInputs.stackDiameter > 0
            && this.traverseInputs.portDepth >= 0
            && this.traverseInputs.numberOfPoints > 0 ) {
            this.completeInput = true;
            this.getPoints(this.traverseInputs).then((points) => this.traversePoints = points, (error) => this.serviceError = error);
        } else {
            this.completeInput = false;
        }
    }

    // .then((response) => response.json().data as number[])
    getPoints(traverseInputs: TraverseInputs): Promise<number[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers });
        this.traversePoints = [];
        return this.http.post(this.traverseApiUrl, traverseInputs, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };

    private extractData(res: Response) {
        const body = res.json();
        this.serviceError = '';
        return body || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Promise.reject(errMsg);
    }

}
