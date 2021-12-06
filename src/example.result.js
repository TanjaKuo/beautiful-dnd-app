const result = {
  draggableId: "task-1",
  type: "TYPE",
  reason: "DROP",
  source: {
    droppableId: "column-1",
    index: 0,
  },
  destination: {
    droppableId: "column-1",
    index: 1,
  },
};

// Draggable
const draggable = {
  isDragging: true,
  draggingOver: "column-1",
};

const droppableSnapshot = {
  isDraggingOver: true,
  draggingOverWith: "task-1",
};

// onDragStart
const start = {
  draggableId: "task-1",
  type: "TYPE",
  source: {
    droppableId: "column-1",
    index: 0,
  },
};

// onDragUpdate
const update = {
  ...start,
  destination: {
    droppabledId: "column-1",
    index: 1,
  },
};

// onDragEnd
const result = {
  ...update,
  reson: "DROP",
};
