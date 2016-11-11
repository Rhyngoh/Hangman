# Hangman
## Pirate Hangman
### A game of Pirate Hangman! Can you best Davy Jone's in hangman or will your soul be trapped in his locker!
___
* Press the start button to begin Hangman. 
* Press any key to guess the letters
* If you run out of lives (6), you will lose
* You win when you solve the word
* Your score will increase by 1 for each word solved, counters will be restored to 6
* Press the reset button to restart the game, counters, and score

___
The making of this game involves understanding in javascript and for loops. The HTML was made using Bootstrap while the rest of the majority was made using javascript. 

The blank spaces for each letter was made using a for loop and concatenating each blank space for every letter. Every key input is compared to a string of guessed letters to see if the letter has already been guessed, then it is compared to the word and shows letters that are the same to the key input. If the letter is not in the word, then the counter increases and hangman image changes. 
