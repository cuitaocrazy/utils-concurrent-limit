module.exports = concurrentCount => iterator => {
  async function worker(taskId) {
    for (const fork of iterator) {
      await fork(taskId)
    }
  }

  return Promise.all(Array.apply(null, { length: concurrentCount }).map((_, index) => worker(index)))
}
