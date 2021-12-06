import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightblue;
  border-radius: 2px;
  width: 220px;
  displya: flex;
  flex-direction: column;
`;
const Title = styled.div`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "lightGreen" : "white"};
  flex-grow: 1;
  min-height: 300px;

  /*   display: flex; */
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable
          droppableId={this.props.column.id}
          //direction="horizontal"
          //type={this.props.column.id === "column-3" ? "done" : "active"}
          //isDropDisabled={this.props.isDropDisabled}
        >
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}

/* 
Now when wrapping our TaskList with a Droppable, we get an error: children is not a function. 
The Droppable utilizes the Render Props pattern and expects its child to be a function 
that returns a react component. To fix this, we have to put our TaskList inside of a function.

provided is our first prop in our function. 
This will give us things like droppableProps which we will use to designate 
which component we want as our droppable.

https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd

The provided object has a property called innerRef, 
which is a function used to supply the DOM node of your component to react-beautiful-dnd

To conclude the droppable we need to insert a placeholder as a child of the component 
that you designate as the droppable. 
A placeholder is used to increase the available space in a droppable during a drag when it's needed.

*/
