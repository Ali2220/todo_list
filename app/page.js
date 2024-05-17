'use client';
import React, { useState } from 'react';

const page = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  // title and description ko mila k jo aye ga wo task hoga
  const [mainTask, setmainTask] = useState([]);
  // jb submit ho to page reload na ho, is k liye humne preventDefault use kiya and title, description wali input field ko empty kr dia
  const submitHandler = (e) => {
    e.preventDefault();
    // we use spread opearator kio k hum chahte hain ko jo pehla wala task dala hai wo na hate jb hum dusra dalein
    setmainTask([...mainTask, { title, desc }]);
    settitle('');
    setdesc('');
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  // mtlb agr koi task nhi dala hai to no task render dikhao or agr dalein hain to task dikhao
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <div key={i} className="flex justify-between items-center mb-3">
            <h5 className=" text-2xl font-semibold"> {t.title} </h5>
            <h6 className=" text-2xl font-semibold"> {t.desc}</h6>

            <button
              onClick={deleteHandler}
              className="border -2 text-white bg-red-400 rounded py-1 px-2 font-bold"
            >
              Delete
            </button>
          </div>
        </>
      );
    });
  }

  return (
    <>
      <h1 className="bg-slate-900 text-white text-center p-4 font-bold text-2xl">
        My Todo List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Add a todo"
          type="text"
          className="text-2xl border-2 border-zinc-600 m-5 px-4 py-2 rounded"
          value={title}
          // Two way Binding
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          placeholder="Enter Description"
          type="text"
          className="text-2xl border-2 border-zinc-600 m-5 px-4 py-2 rounded"
          value={desc}
          // Two way Binding
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button
          type="submit"
          value={title}
          className="bg-slate-900 text-white text-xl p-2 border-2 rounded-xl px-4 py-2 font-bold m-5"
        >
          Add Todo
        </button>
      </form>

      <hr />

      <div className=" p-8 bg-slate-950 text-white font-sans text-2xl">
        {renderTask}
      </div>
    </>
  );
};

export default page;
