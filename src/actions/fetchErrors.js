import {fetchErrorsPending, fetchErrorsSuccess, fetchErrorsError, fetchErrorByID} from './errors';

export function fetchErrors() {
    return dispatch => {
        const dat = [
            {
              "id": "1",
              "category_id": "1",
              "message": "TRANSFER [110] TRANSFER  Operation timed out",
              "src_site": "WT2",
              "dst_site": "UKI-SOUTHGRID-OX-HEP",
              "amount": "223",
              "failure_type": "transfer-failure",
              "created_at": "2019-06-05 14:11:49.133219"
            },
            {
              "id": "2",
              "category_id": "2",
              "message": "The requested service is not available at the moment.\nDetails: An unknown exception occurred.\nDetails: globus_ftp_client: the server responded with an error 530 530-globus_xio_gssapi_ftp.c:globus_l_xio_gssapi_ftp_server_read_cb:1392:  530-Server side crede",
              "src_site": "UNKNOWN",
              "dst_site": "ANLASC",
              "amount": "1866",
              "failure_type": "deletion-failure",
              "created_at": "2019-06-05 14:11:49.337664"
            }
          ]; 
        dispatch(fetchErrorsSuccess(dat));
        return dat;
    }
}

export function getErrorById(id) {
    return dispatch => {
        const dat = [
            {
              "id": "1",
              "category_id": "1",
              "message": "TRANSFER [110] TRANSFER  Operation timed out",
              "src_site": "WT2",
              "dst_site": "UKI-SOUTHGRID-OX-HEP",
              "amount": "223",
              "failure_type": "transfer-failure",
              "created_at": "2019-06-05 14:11:49.133219"
            },
            {
              "id": "2",
              "category_id": "2",
              "message": "The requested service is not available at the moment.\nDetails: An unknown exception occurred.\nDetails: globus_ftp_client: the server responded with an error 530 530-globus_xio_gssapi_ftp.c:globus_l_xio_gssapi_ftp_server_read_cb:1392:  530-Server side crede",
              "src_site": "UNKNOWN",
              "dst_site": "ANLASC",
              "amount": "1866",
              "failure_type": "deletion-failure",
              "created_at": "2019-06-05 14:11:49.337664"
            }
          ]; 
        dispatch(fetchErrorsSuccess(dat));
        dispatch(fetchErrorByID(id));
        return id;
    }
}