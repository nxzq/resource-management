import React from 'react';

const AddForm = () => {

    handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h2>About</h2>
            <hr />
            <form onSubmit={this.handleSubmit}>

            </form>
        </div>
    )
}

export default AddForm