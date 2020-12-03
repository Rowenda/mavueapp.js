<template>
<div>
<h1>{{ msg }}</h1>
<div class="jumbotron">
<div class="row col input-group mb-4">
<input v-model.number="valeurHT" type="text" class="form-control">
<div class="input-group-append">
<span class="input-group-text">€ HT</span>
</div>
</div>
<div class="row col mb-4">
                Taux :
                <div class="form-check form-check-inline">
                    <input class="form-check-input" value="0.2" v-model.number="taux" type="radio" name="tva" id="20" checked>
                    <label class="form-check-label" for="20">20 %</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" value="0.1" v-model.number="taux" type="radio" name="tva" id="10">
                    <label class="form-check-label" for="10">10 %</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" value="0.055" v-model.number="taux" type="radio" name="tva" id="55">
                    <label class="form-check-label" for="55">5,5 %</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" value="0.021" v-model.number="taux" type="radio" name="tva" id="21">
                    <label class="form-check-label" for="21">2,1 %</label>
                </div>
            </div>
            <div class="row col">
                Montant TTC :<strong class="montant"> {{ valeurTTC | currency }}</strong>
            </div>
            <div class="row col">
                Montant de la TVA :<strong class="montant"> {{ valeurTVA | currency }}</strong>
            </div>
            </div>
            </div>
</template>

<script>
export default {
  name: 'Tva',
  props: {
    msg: String
  },
  data: function() { return {valeurHT: 0, taux: '0.2'}
},
computed: {
valeurTTC: function() {
return this.valeurHT + this.valeurTVA;
},
valeurTVA: function() {
return this.valeurHT * this.taux;
}
},
filters: {
twoDecimals: function (value) {
return parseFloat(value).toFixed(2);
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.jumbotron {
margin-top: 2rem;
padding: 2rem;
}
</style>
