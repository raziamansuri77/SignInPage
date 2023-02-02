import React from 'react';
export function Form() {
  return (
    <div class="flex justify-center items-center flex-col ">
      <h1 class="text-[30px] font-bold ">Hello!</h1>
      <div>Sign in to your account</div>
      <input class="rounded-full py-1 px-4 " type="text" placeholder="Full Name*" />

      <input
        class="rounded-full mt-[10px] py-1 px-4 "
        type="text"
        placeholder="Password*"
      />
      <button class="bg-white mt-2 px-2 py-1 rounded-[20px]">Sign In</button>
    </div>
  );
}
