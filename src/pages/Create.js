import React from 'react'
import './Create.css'
const Create = () => {
    return (
        <div >
            <br />
            <br />

            <div className="boxdiv">
                <form >
                    <label>Name:</label>
                    <input placeholder="Enter Name" type="text" name="name" />

                    <br></br>

                    <label>Page Code:</label>
                    <input placeholder="Enter Code" type="text" name="name" />

                    <br></br>

                    <input type="submit" value="Submit" />
                </form>




            </div>

        </div>
    )
}

export default Create
