/* eslint-disable no-undef */
import { useState } from "react";
import React from "react";
// import "./task.css";

const Task = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(1000);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="contain">
        <h2>Create Account</h2>
        <form action="">
          <div className="form">
            <div className="first">
              <div className="fr">
                <label htmlFor="">First name*</label>
                <br />
                <input type="text" placeholder="enter your first name" />
              </div>
              <div className="la">
                <label htmlFor="">last name</label>
                <br />
                <input type="text" placeholder="enter your last name" />
              </div>
            </div>
            <div className="email">
              <label htmlFor="">email*</label>
              <br />
              <input type="email" placeholder="enter your email" />
            </div>
            <div className="first">
              <div className="fr">
                <label htmlFor="">password*</label>
                <br />
                <input type="text" value="" placeholder="enter your password" />
              </div>
              <div className="la">
                <label htmlFor="">confirm password*</label>
                <br />
                <input
                  type="text"
                  value=""
                  placeholder="enter your last name"
                />
              </div>
            </div>
            <div className="hop">
              <div>
                <label htmlFor="">gender:</label>
                <br />
                <input type="radio" name="gender" id="m" />
                <label htmlFor="m">male</label>
                <input type="radio" name="gender" id="w" />
                <label htmlFor="w">female</label>
              </div>
              <div>
                <label htmlFor="">hobbies:</label>
                <br />
                <input type="checkbox" name="music" id="music" />
                <label htmlFor="music">music</label>
                <input type="checkbox" name="sport" id="sport" />
                <label htmlFor="sport">sport</label>
                <input type="checkbox" name="travel" id="travel" />
                <label htmlFor="travel">travel</label>
              </div>
            </div>
            <div className="score">
              <div className="scorein">
                <label htmlFor="">score of income</label>
                <br />
                <select>
                  <option value="">Employed</option>

                  <option value="stockholm">Stockholm</option>
                  <option value="barcelona">Barcelona</option>
                  <option value="athens">Athens</option>

                  <option value="bangkok">Bangkok</option>
                  <option value="manila">Manila</option>
                  <option value="jakarta">Jakarta</option>
                </select>
              </div>
              <div className="scoreIncome">
                <label htmlFor=""> income</label>
                <br />
                <div>
                  <input
                    type="range"
                    step={1000}
                    min={1000}
                    max={100000}
                    onChange={handleChange}
                    id="vall"
                  />

                  <span>{value.toString().slice(0, -3)}K</span>
                </div>
              </div>
            </div>
            <div className="more">
              <div className="upload">
                <label htmlFor=""> upload Profile Picture</label>
                <br />
                <input type="file" name="" id="" />
              </div>
              <div className="age">
                <label htmlFor=""> age</label>
                <br />
                <input type="number" name="" id="" value={20} />
              </div>
            </div>
            <div className="txt">
              <label htmlFor="">bio</label>
              <br />
              <textarea name="" id=""></textarea>
            </div>
          </div>
          <div className="sub">
            <span>*required</span>
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Task;
