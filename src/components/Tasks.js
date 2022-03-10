import React, { useRef, useEffect } from 'react';

const Tasks = ({ tasks, deleteTask, doTasks, editTask, toggleEdit }) => {
    const editInput = useRef(null)
    // useEffect(() => {
    //     if (editInput === undefined) {
    //         // editInput.current.focus();
    //         console.log("hello");
    //     }
    // })
    return (
        <>
            {!tasks.length ?
                <h1 className='mt-5'>Just do it!</h1> :
                tasks.map(task => (
                    <section key={task.id} className='py-3 px-4 border my-4 d-flex justify-content-between'>
                        {
                            !task.edit ?
                                !task.check ?
                                    <p className='m-0'>{task.title}</p> :
                                    <p className='m-0 text-danger' style={{ textDecoration: "line-through" }}>{task.title}</p> :
                                <input ref={editInput} onChange={e => editTask(e, task.id)} type="text" className='m-0 border-0 outline-0' value={task.title} />
                        }
                        <section className='d-flex justify-content-between align-items-center'>
                            <input onChange={() => doTasks(task.id)} className="form-check-input" type="checkbox" value="" />
                            {
                                task.edit ?
                                    <span onClick={() => toggleEdit(task.id)} className='text-success mr-3 ml-2 pe-auto'><i className='fas fa-check'></i></span> :
                                    <span onClick={() => toggleEdit(task.id)} className='text-warning mr-3 ml-2'><i className='fas fa-pen'></i></span>
                            }
                            <span onClick={() => deleteTask(task.id)} className='text-danger'><i className='fas fa-trash'></i></span>
                        </section>
                    </section>
                ))
            }

        </>

    );
};

export default Tasks;