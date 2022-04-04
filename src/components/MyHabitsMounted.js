import styled from "styled-components";
import axios from "axios";
import { BsTrash } from "react-icons/bs";

import { useContext } from "react";

import TokenContext from "../contexts/TokenContext";

function MyHabitsMounted(props) {
  const { habitList, setRender, render } = props;
  const { user } = useContext(TokenContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };

  function verifySelect(id, days) {
    for (let i = 0; i < days.length; i++) {
      if (days[i] === id) {
        return "selected";
      }
    }

    return "";
  }

  function mountDays(days) {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
      weekdays.map((day, index) => {
        return (
          <p id={index} className={verifySelect(index, days)}>
            {day}
          </p>
        )
      })
    )
  }

  function handleClick(id) {
    let confirmation = window.confirm(
      "Deseja excluir este hábito? Ele será apagado da sua semana, da sua vida e do seu ser... beba água"
    );

    if (confirmation === true) {
      const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

      axios
        .delete(URL_DELETE, config)
        .then(() => {
          setRender(!render);
        })
        .catch((error) => {
          console.log(error.response);
          alert(
            "Não deu pra deletar esse hábito... Ou é um hábito essencial ou o servidor deu erro ou você não bebeu água"
          );
        });
    }
  }

  return habitList.map((habit) => {
    return (
      <$HabitWrapper key={habit.id}>
        <h3>{habit.name}</h3>
        <BsTrash className={habit.id} onClick={() => handleClick(habit.id)} />
        <div className="day-icons">
          {mountDays(habit.days)}
        </div>
      </$HabitWrapper>
    );
  });
}

export default MyHabitsMounted;

const $HabitWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  width: 90vw;
  margin-bottom: 10px;
  border-radius: 5px;

  svg {
    font-size: 18px;
    color: var(--color-text-black);
    position: absolute;
    top: 11px;
    right: 10px;

    &:hover {
      cursor: pointer;
      color: var(--color-logo-header);
      font-size: 25px;
    }
  }
  h3 {
    color: var(--color-text-black);
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-top: 13px;
    margin-right: 30px;
  }

  .day-icons {
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & p {
      width: 30px;
      height: 28px;
      text-align: center;
      border-radius: 5px;
      border: 1px solid var(--color-text-input);
      margin-right: 1%;
      color: var(--color-text-input);

      &.selected {
        color: white;
        background-color: #cfcfcf;
        border: 1px solid #cfcfcf;
      }
    }
  }
`;
