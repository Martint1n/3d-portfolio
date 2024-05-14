import React from 'react'

function Section(props) {
  return (
    <div className={`h-screen flex flex-col justify-center p-10 ${
      props.right ? "items-end" : "items-start"
    }`}>
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;