import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
export interface IAlertService {
    success(title: string, textMessage: string, textbutton: string): any;
    error(title: string, textMessage: string, textbutton: string): any;
    warning(title: string, textMessage: string, textbutton: string): any;
    info(title: string, textMessage: string, textbutton: string): any;
    question(title: string, textMessage: string, textbutton: string, messsage?: string): any;
}

@Injectable({
    providedIn: 'root',
})
export class AlertService implements IAlertService {
    success(title: string, textMessage: string, textbutton: string) {
        return swal({
            title,
            text: textMessage,
            type: 'success',
            confirmButtonText: textbutton,
        });
    }

    error(title: string, textMessage: string, textbutton: string) {
        return swal({
            title,
            text: textMessage,
            type: 'error',
            confirmButtonText: textbutton,
        });
    }

    warning(title: string, textMessage: string, textbutton: string) {
        return swal({
            title,
            text: textMessage,
            type: 'warning',
            confirmButtonText: textbutton,
        });
    }

    info(title: string, textMessage: string, textbutton: string) {
        return swal({
            title,
            text: textMessage,
            type: 'info',
            confirmButtonText: textbutton,
        });
    }

    question(title: string, textMessage: string, textbutton: string, message: string) {
        return swal({
            title,
            text: textMessage,
            type: 'question',
            confirmButtonText: textbutton,
        });
    }

    question2(title: string, textMessage: string, textbutton: string) {
        return swal({
            title,
            text: textMessage,
            type: 'question',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: textbutton,
        });
    }
}
