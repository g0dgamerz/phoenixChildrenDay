import React, { Component } from "react";
import quiz from "./quiz.JPG";
import { ExternalLink } from "react-external-link";

class Rule extends Component {
  render() {
    return (
      <div>
        <h2>Rules</h2>
        <p>Rules for today's quiz are as follows:</p>
        <ol>
          <li>
            Quiz will be between boys and girls, Teams can choose catagory for
            the first round if they win coin toss
          </li>
          <li>
            Time Limitation will be of 10 Sec for 1<sup>st</sup> two round and
            it will be of 5 second for last 2 rounds
          </li>
          <li>
            In round 1 question can't be passed but in round 2 once 10 second
            time is up i.e if first team fails to answer question with in 10
            second question will be automatically passed to 2<sup>nd</sup> team
            but time limitation for 2<sup>nd</sup> team will be 5 second only
            and vice versa.
          </li>

          <li>
            In round 3 time limitation will be 5 sec but whoever has won toss
            can choose catagory again for third round
          </li>
          <li>
            Round 4 will raise hand round, who ever raises hand first will be
            attemping the question. If team is not able to answer within 5 sec
            100 points will be deducted from than team in round 4.
          </li>
        </ol>
        <img src={quiz} height="300" width="1200" />
        <center>
          <ExternalLink href="https://triviamaker.com/gamepreviewnew.php?S=splash&gm=GD20200911159983279793991">
            <button class="button">
              <span>Start Quiz</span>
            </button>
          </ExternalLink>
        </center>
      </div>
    );
  }
}

export default Rule;
