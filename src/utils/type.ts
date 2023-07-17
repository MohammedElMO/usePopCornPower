const func = async () => {
  return {
    id: -1
  }
}

type Result = Awaited<Promise<ReturnType<typeof func>>>
