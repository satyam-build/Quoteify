import React from 'react'

function Alert(props) {
    return (
        <div>
            {
                props.alert && <div class="alert alert-success" role="alert">
                    {props.alert.msgType} ! {props.alert.msg}
                </div>
            }
        </div>
    )
}

export default Alert