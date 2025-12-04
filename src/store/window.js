import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "../Constans/index.js";


const useWindowStore = create(immer((set) =>({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow:(windowKey, data = null ) => set((state)=>{
        const win = state.windows[windowKey];
        if(!win) return;
     win.isOpen = true;
     win.zIndex = state.nextZIndex;
     win.data = data ?? win.data;
     state.nextZIndex++;
    }),

    closeWindow:(windowKey ) => set((state)=>{
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX ;
        win.data = null;
        win.isMinimized = false;
        win.isMaximized = false;
        state.nextZIndex++;
    }),
    focusWindow:(windowKey) => set((state)=>{
        const win = state.windows[windowKey];
        if(!win) return;
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;

    }),

    minimizeWindow:(windowKey) => set((state)=>{
        const win = state.windows[windowKey];
        if(!win) return;
        win.isMinimized = true;
    }),

    maximizeWindow:(windowKey) => set((state)=>{
        const win = state.windows[windowKey];
        if(!win) return;
        win.isMaximized = !win.isMaximized;
    }),
})))




export default useWindowStore;



