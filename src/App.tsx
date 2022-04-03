/* eslint-disable array-callback-return */
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

const TrashButtonContainer = styled.div<{ isDraggin: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: crimson;
  color: white;
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.isDraggin ? "scale(1.3)" : "none")};
  /* &.dragging-over {
    transform: scale(1.3);
  } */
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    if (source.droppableId === "Boards") {
      setToDos((allBoards) => {
        const boardList = Object.keys(allBoards);
        const taskObj = boardList[source.index];
        boardList.splice(source.index, 1);
        boardList.splice(destination.index, 0, taskObj);
        let boards = {};
        boardList.map((board) => {
          boards = { ...boards, [board]: allBoards[board] };
        });
        return { ...boards };
      });
    }
    if (destination.droppableId === "trash") {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId === source.droppableId) {
      //same board movement
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskobj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskobj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      //cross board movement
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskobj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskobj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Droppable droppableId="Boards" direction="horizontal" type="BOARD">
          {(magic, snapshot) => (
            <Boards ref={magic.innerRef} {...magic.droppableProps}>
              {Object.keys(toDos).map((boardId, index) => (
                <Board
                  boardId={boardId}
                  key={boardId}
                  toDos={toDos[boardId]}
                  index={index}
                />
              ))}
              {magic.placeholder}
            </Boards>
          )}
        </Droppable>

        <Droppable droppableId={"trash"}>
          {(magic, snapshot) => (
            <>
              <TrashButtonContainer
                ref={magic.innerRef}
                {...magic.droppableProps}
                isDraggin={snapshot.isDraggingOver}
              >
                <FontAwesomeIcon icon={faTrash} color={"white"} size={"lg"} />
              </TrashButtonContainer>
            </>
          )}
        </Droppable>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
