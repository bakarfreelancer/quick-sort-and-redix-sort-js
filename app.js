function bucketSort(arr) {
  // 1. Create a bucket array of empty arrays
  let buckets = Array(arr.length);
  // 2. Put each item in the array into a bucket
  for (let i = 0; i < arr.length; i++) {
    buckets[i] = [];
    //   3. Find the index of the bucket where the item belongs
    buckets[Math.floor(arr.length * arr[i])].push(arr[i]);
  }
  // 4. Sort each bucket
  let sorted = [];
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
    sorted = sorted.concat(buckets[i]);
  }
  //   5. Return the sorted array
  return sorted;
}

// Quick Sort
function quickSort(arr) {
  // 1. Pick a pivot point
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  // 2. Split the array into two parts
  let left = [];
  let right = [];
  //   3. Loop through the array and compare each item to the pivot point
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      //  4. If the item is less than the pivot, add it to the left array
      left.push(arr[i]);
    } else {
      //  5. If the item is greater than the pivot, add it to the right array
      right.push(arr[i]);
    }
  }
  // 6. Return the sorted left and right arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// +++++++++++++++++++++++++++++++++//
// Code for html elements and design
// +++++++++++++++++++++++++++++++++//
const bucketInput = document.querySelector(".bucketInput");
const quickSortInput = document.querySelector(".quickSortInput");
const bucketValues = document.querySelector(".bucketValues");
const sortedBucketValues = document.querySelector(".sortedBucketValues");
const quickSortValues = document.querySelector(".quickSortValues");
const quickSortedValues = document.querySelector(".quickSortedValues");
function addValueForBucketSort() {
  if (bucketInput.value === "") {
    return;
  }
  if (bucketInput.value < 0 || bucketInput.value > 1) {
    alert("Please enter a value between 0 and 1");
  } else {
    bucketValues.insertAdjacentHTML(
      "beforeend",
      `<li>${bucketInput.value}<span onclick="deleteItem(this)" class="delete"
      ><img src="delete.png" alt="Delete"
    /></span></li>`
    );
    bucketInput.value = "";
    bucketInput.focus();
  }
}
// Insert value on enter keypress
bucketInput.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addValueForBucketSort();
  }
});

function applyBucketSort() {
  let bucketArray = Array.from(bucketValues.children).map((child) =>
    parseFloat(child.innerText)
  );
  console.log(bucketValues);
  let sortedArray = bucketSort(bucketArray);
  sortedBucketValues.innerHTML = "";
  sortedArray.forEach((num) => {
    sortedBucketValues.insertAdjacentHTML("beforeend", `<li>${num}</li>`);
  });
}

function addValueForQuickSort() {
  if (quickSortInput.value === "") {
    return;
  }
  quickSortValues.insertAdjacentHTML(
    "beforeend",
    `<li>${quickSortInput.value}<span onclick="deleteItem(this)" class="delete"
    ><img src="delete.png" alt="Delete"
  /></span></li>`
  );
  quickSortInput.value = "";
  quickSortInput.focus();
}
// Insert value on enter keypress
quickSortInput.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addValueForQuickSort();
  }
});

function applyQuickSort() {
  let quickSortArray = Array.from(quickSortValues.children).map((child) =>
    parseFloat(child.innerText)
  );
  let sortedArray = quickSort(quickSortArray);
  quickSortedValues.innerHTML = "";
  sortedArray.forEach((num) => {
    quickSortedValues.insertAdjacentHTML("beforeend", `<li>${num}</li>`);
  });
}

// Delete the list item on clicking on delete span
function deleteItem(element) {
  element.parentNode.remove();
}
