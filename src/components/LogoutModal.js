import React from 'react'

function LogoutModal() {
    return (
        <>
            <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="logoutModalLabel">Are you sure you would like to log out?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Stay Logged In</button>
                            <button type="button" class="btn btn-primary">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoutModal