<template>
  <div class="card">
    <header class="evocation">Alarm</header>
    <section>
      <dl class="half">
        <dt>Range</dt>
        <dd>10 yds.</dd>
        <dt>Casting Time</dt>
        <dd>1 rd.</dd>
        <dt>Save</dt>
        <dd>None</dd>
      </dl>
      <dl class="half">
        <dt>AoE</dt>
        <dd>Up to a 20ft. cube</dd>
        <dt>Duration</dt>
        <dd>4 hrs. + 1/2 hr. /level</dd>
        <dt>Damage</dt>
        <dd></dd>
      </dl>

      <div class="description">
        <div class="description-content">
          When an alarm spell is cast, the wizard causes a selected area to
          react to the presence of any creature larger than a normal rat -
          anything larger than about one-half cubic foot in volume or more than
          about three pounds in weight. The area of effect can be a portal, a
          section of floor, stairs, etc. As soon as any creature enters the
          warded area, touches it, or otherwise contacts it without speaking a
          password established by the caster, the alarm spell lets out a loud
          ringing that can be heard clearly within a 60-foot radius. (Reduce the
          radius by 10 feet for each interposing door and by 20 feet for each
          substantial interposing wall.) <br />
          The sound lasts for one round and then ceases. Ethereal or astrally
          projected creatures do not trigger an alarm, but flying or levitating
          creatures, invisible creatures, or incorporeal or gaseous creatures
          do. The caster can dismiss the alarm with a single word.
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
dt {
  font-weight: bold;
}
dd {
  margin-left: 0px;
  height: 22px;
  line-height: 11px;
}
.card {
  width: 350px;
  float: left;
  margin-right: 20px;
  border: 1px solid #000000;
  font-size: 11px;
  margin-bottom: 25px;
  color: #333333;
  position: relative;
}
div {
  display: block;
  unicode-bidi: isolate;
}
.evocation {
  background: #c20000;
}
header {
  background: #cccccc;
  position: relative;
  font-size: 14px;
  line-height: 25px;
  height: 27px;
}
section {
  padding: 5px 10px;
  padding-bottom: 0px;
  display: block;
  unicode-bidi: isolate;
}
.description {
  padding: 5px 0px;
  margin-bottom: 10px;
  background: #aaaaaa;
  text-align: justify;
}
.description-content {
  height: 190px;
  overflow: auto;
  padding: 0px 5px;
}
dl {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
.half {
  float: left;
  width: 50%;
}
</style>
