const Contact = () => {
    return (
        <div className="container mx-auto my-5 w-50">
            <div className="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Full Name" />
            </div>
            <div className="mb-3">
            <label for="emailAddress" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailAddress" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </div>
    )
}

export default Contact
