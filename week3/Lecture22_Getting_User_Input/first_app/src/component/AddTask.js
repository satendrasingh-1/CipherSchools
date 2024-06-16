function AddTask(){
    return(
        <>
            <h3 className="center">Add New Task</h3>
            <div className="ui form">
                <form>
                    <div class="field">
                        <label>Title</label>
                        <input type="text" placeholder="Task title" name="title"/>
                    </div><br></br>
                    <div class="field">
                        <label>Description</label>
                        <textarea rows="2" placeholder="Description" name="description"></textarea>
                    </div>
                    <button class="ui primary button">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}


export default AddTask;