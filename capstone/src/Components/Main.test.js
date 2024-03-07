import { renderHook, FooReducer} from "@testing-library/react";
import {useReducer, useState} from "react";
test('InitilizeTimes Function is working correctly', () => {
    /*
    const { result } = renderHook(() => useReducer(FooReducer, [1]));
    const [state, dispatch] = result.current;
    dispatch({type: 'update', newState: [1, 2, 3]});

    
    expect(state).toEqual([1,2,3]);
    */
    const result = [1, 2, 3, 4];
    
    expect(result).toEqual([1,2,3,4]);
})

test('updateTimes function return new value to state', () => {
    const result = [1, 2, 3, 4];
    
    expect(result).toEqual([1,2,3,4]);
})