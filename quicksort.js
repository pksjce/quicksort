 
function partition(a, low, high) {
var left = low;
var right = high;
var pivot = low;
var pivotElement = a[pivot];
    while(left <= right){
        if(a[left]<= a[pivot]){
            left++;
        }
        if(a[right]>a[pivot]){
            right--;
        }            
        if(a[left] > a[pivot] && a[right] <a[pivot] && left < right){
            var temp = a[left];
            a[left] = a[right];
            a[right] = temp;
        }
    }
//this is tricky part. if right has moved to left of left, then this will be useful!
	a[low] = a[right]
	a[right] = pivotElement;    
    return right;    
}

function quicksort(a, low, high){
    var pivot = low;
    if(high > low) {
        pivot = partition(a, low, high);
        quicksort(a, low, pivot-1);
        quicksort(a, pivot +1, high);
    }
}

function addToHtml(a){
var html = "<ul>";
    for(var i =0;i<a.length;i++){
        html += "<li>" + a[i] + "</li>";
    }        
html += "</ul>";
document.getElementById('items').innerHTML = html;

    
}

$(document).ready( function(){
var a = [45,38,12,62,42,34,8,2,76,48];
quicksort(a, 0, a.length-1);    
    addToHtml(a);
});
