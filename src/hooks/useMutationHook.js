import { useMutation } from "@tanstack/react-query";

export const useMutationHook = (fn) => {
  const mutation = useMutation({
    mutationFn: fn,
  });
  return mutation;
};
