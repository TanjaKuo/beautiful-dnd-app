import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4%;
  padding: 8px;
  margin-right: 8px;
  background-color: ${(props) =>
    props.isDragDisabled ? "lightgray" : props.isDragging ? "pink" : "white"};
  display: flex;
  /*   width: 40px;
  height: 40px; */
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border-color: pink;
  }
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

export default class Task extends React.Component {
  render() {
    //const isDragDisabled = this.props.task.id === "task-1";
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        //isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            // isDragDisabled={isDragDisabled}
          >
            {/*   <Handle {...provided.dragHandleProps} /> */}
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

/* 
simiarly like column, Draggable expect child as a func

The provided has two properties, 

draggableProps; these props need to be applied to the component 
that we want to move around in response to a user input. Secondly, 

dragHandleProps; these are the props that need to be applied to the part of the component t
hat we want to use to be able to control the entire component. 

You can use this to drag a large item by just a small part of it. 
For our application, we want the whole task to be draggable.
 We're going to apply these props to the same element. 
 As with our droppable, we also need to provide a ref for our draggable.
*/
