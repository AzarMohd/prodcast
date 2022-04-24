import React from 'react';




function Popup(props) {
        
     const handleSubmit = (e) => {
        
        const first = e.target.fname.value;
        const email = e.target.lname.value;
        document.getElementById('value').innerHTML=(`<h1><ul className="list-group"><li className="list-group-item">${first}</li><li className="list-group-item">${email}</li></ul></h1>`)
        e.preventDefault();
        e.target.fname.value="";
        e.target.lname.value="";
    }

    return (props.trigger) ? (
        <div>
            <div className="container modal-contents">
                <div className="close" onClick={() => props.setTrigger(false)}>+</div>
                <img src="./assets/login.jpg" alt="Avatar" className='img' />
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="Name">Name</label>
                        <input type="text" name="fname" class="form-control" placeholder="Enter your Name" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="lname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
            </div>
            
        </div>
    ) : "";
}

export default Popup

