function amazonMusicRuntime(busDuration, songDurations) {
  let expected = [-1, -1];
  let maxLength = 0;

  for (let i = 0; i < songDurations.length; i++) {
    for (let j = i + 1; j < songDurations.length; j++) {
      if (songDurations[i] + songDurations[j] == busDuration - 30) {
        maxLength = Math.max(
          Math.max(maxLength, songDurations[i]),
          songDurations[j]
        );
        
        // Checking if the current pair includes the longest song
        if (maxLength === songDurations[i] || maxLength === songDurations[j])
          // Turns the indexes of the expected array into the index values where the maxLength is found
          expected[0] = i;
        expected[1] = j;
      }
    }
  }

  return expected;
}

console.log(amazonMusicRuntime(90, [1, 10, 25, 35, 60]));
