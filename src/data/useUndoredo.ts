import {UndoManager} from './undo_redo';

const undoManager = new UndoManager();
undoManager.add({
  name: 'Undoable thing',
  undo: () => {console.log('undo')},
  redo: () => {console.log('redo')}
});

undoManager.undo();
undoManager.redo();