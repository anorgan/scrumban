<div class="card {{ card.type }}">
    <div class="relation">
      <span class="team">{{ card.team }}</span>
      <span class="project">{{ card.project }}</span>
    </div>
    <div class="title">
      <p>{{ card.title }}</p>
    </div>
    <div class="planning">
      <span class="release">{{ card.release }}</span>
      <span class="itteration">{{ card.itteration }}</span>
      <span class="effort"><input type="text" name="effort" ng-model="card.effort" ng-change="update()">pt</span>
    </div>
</div>