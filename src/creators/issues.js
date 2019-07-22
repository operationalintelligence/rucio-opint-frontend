import {fetchIssuesBegin, fetchIssuesSuccess, fetchIssuesFailure, fetchIssueByID} from '../actions/issues';

export function fetchIssues() {
    return dispatch => {
        dispatch(fetchIssuesBegin());
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
        dispatch(fetchIssuesSuccess(dat));
        return dat;
    }
}

export function fetchIssueById(id) {
    return dispatch => {
        dispatch(fetchIssuesBegin());
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
        dispatch(fetchIssuesSuccess(dat));
        dispatch(fetchIssueByID(id));
        return id;
    }
}
