import React from "react";
import { render, fireEvent, renderHook } from '@testing-library/react';
import useLocalStorage from "../hooks/useLocalStorage";

describe("useLocalStorage", () => {
  it("should default to null", () => {
    const { result } = renderHook(() => useLocalStorage())
    // result.current = array: [item, setItem]
    expect(result.current[0]).toBe(null)
    // check setItem = function
    expect(result.current[1]).toBeInstanceOf(Function)
  });

  it("should still be null if no value is provided with the key", () => {
    const { result } = renderHook(() => useLocalStorage("key"))
    expect(result.current[0]).toBe(null)
  });

  it("should set the stored value to the second parameter", () => {
    const { result } = renderHook(() => useLocalStorage("key", "value"))
    expect(result.current[0]).toBe("value")
  });
});