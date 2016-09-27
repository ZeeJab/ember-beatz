import Controller from 'ember-controller';

export default Controller.extend({
  audioService: Ember.inject.service(),

  actions: {
    play(sound) {
      this.get('audioService').play(sound);
      console.log('playing sound');
    }
  }
})
