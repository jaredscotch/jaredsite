<><form name="pacecalc">
    <div class="form">
        <label>How far are you running?</label>
        <input type="text" class="formcontrol" name="txtnum1" placeholder="How far"></input>
    </div>
    <div name="form">
        <label>What is your goal finish time?</label>
        <input type="text" class="formcontrol" name="txtnum2" placeholder="Goal finish time"></input>
    </div>
</form>

<button class="btn btn-primary" onclick="minutes();">Calculate</button></>

function minutes() {
    var num1 = Number(document.formcalc.txtnum1.value);
    var num2 = Number(document.formcalc.txtnum2.value);
    var res = num2/num1;
    var pace = res.toString();
    documentgetElementById("minutes").innerHTML = minutes;
}

<p>You'll have to run <strong id="minutes">...</strong>minutes per mile.</p>