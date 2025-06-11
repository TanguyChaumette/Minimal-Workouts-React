export const workoutTypes = {
  fullBody: {
    name: 'All In',
    type: 'Full Body',
    workouts: {
      10: {
        type: 'fullBody',
        duration: 10,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: '/videos/start-1.mp4', isBreak: false },
          { name: 'Jumping Jacks', duration: 40, videoUrl: '/videos/jumping-jacks.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Push-ups', duration: 40, videoUrl: '/videos/pushups.mp4', isBreak: false },
          { name: 'Squats', duration: 40, videoUrl: '/videos/squats.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },
          { name: 'Mountain Climbers', duration: 40, videoUrl: '/videos/mountain-climbers.mp4', isBreak: false },
          { name: 'Plank', duration: 40, videoUrl: '/videos/plank.mp4', isBreak: false }
        ]
      },

      20: {
        type: 'fullBody',
        duration: 20,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: '/videos/start-1.mp4', isBreak: false },

          // Circuit 1
          { name: 'Jumping Jacks', duration: 40, videoUrl: '/videos/jumping-jacks.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Push-ups', duration: 40, videoUrl: '/videos/pushups.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },
          { name: 'Lunge alt forward', duration: 40, videoUrl: '/videos/lunge-alt-forward.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Plank Row', duration: 40, videoUrl: '/videos/plank-row.mp4', isBreak: false },
          { name: 'Break', duration: 60, videoUrl: '/videos/break-2.mp4', isBreak: true },

          // Circuit 2
          { name: 'Burpees', duration: 40, videoUrl: '/videos/burpees.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Squat Jump', duration: 40, videoUrl: '/videos/squat-jump.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },
          { name: 'Diamond Pushup', duration: 40, videoUrl: '/videos/diamond-pushup.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Plank Knee Tuck', duration: 40, videoUrl: '/videos/plank-knee-tuck.mp4', isBreak: false },
        ]
      },

      30: {
        type: 'fullBody',
        duration: 30,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: '/videos/start-1.mp4', isBreak: false },

          // Circuit 1
          { name: 'Jump Split Lunge', duration: 40, videoUrl: '/videos/jump-split-lunge.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Push-ups', duration: 40, videoUrl: '/videos/pushups.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },
          { name: 'Squat Hold', duration: 40, videoUrl: '/videos/squat-hold.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Mountain Climbers', duration: 40, videoUrl: '/videos/mountain-climbers.mp4', isBreak: false },
          { name: 'Break', duration: 60, videoUrl: '/videos/break-2.mp4', isBreak: true },

          // Circuit 2
          { name: 'Fast Feet', duration: 40, videoUrl: '/videos/fast-feet.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Plank Row', duration: 40, videoUrl: '/videos/plank-row.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },
          { name: 'Glute Bridges', duration: 40, videoUrl: '/videos/glute-bridges.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Superman Extension', duration: 40, videoUrl: '/videos/superman-extension.mp4', isBreak: false },
          { name: 'Break', duration: 60, videoUrl: '/videos/break-2.mp4', isBreak: true },

          // Circuit 3
          { name: 'Bicycle Kicks', duration: 40, videoUrl: '/videos/bicycle-kicks.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Shoulder Taps', duration: 40, videoUrl: '/videos/shoulder-taps.mp4', isBreak: false }
        ]
      },

      40: {
        type: 'fullBody',
        duration: 40,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: '/videos/start-1.mp4', isBreak: false },

          // Circuit 1
          { name: 'Jumping Jacks', duration: 40, videoUrl: '/videos/jumping-jacks.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Push-ups', duration: 40, videoUrl: '/videos/pushups.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },
          { name: 'Lung Alt Forward', duration: 40, videoUrl: '/videos/lunges.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Plank Row', duration: 40, videoUrl: '/videos/plank-row.mp4', isBreak: false },
          { name: 'Break', duration: 60, videoUrl: '/videos/break-2.mp4', isBreak: true },

          // Circuit 2
          { name: 'Burpees', duration: 40, videoUrl: '/videos/burpees.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Diamond Pushup', duration: 40, videoUrl: '/videos/diamond-pushup.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },
          { name: 'Glute Bridges', duration: 40, videoUrl: '/videos/glute-bridges.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Jump Split Lunge', duration: 40, videoUrl: '/videos/jump-split-lunge.mp4', isBreak: false },
          { name: 'Break', duration: 60, videoUrl: '/videos/break-2.mp4', isBreak: true },

          // Circuit 3
          { name: 'Plank Knee Tuck', duration: 40, videoUrl: '/videos/plank-knee-tuck.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Squat Jump', duration: 40, videoUrl: '/videos/squat-jump.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },
          { name: 'Superman Extension', duration: 40, videoUrl: '/videos/superman-extension.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-1.mp4', isBreak: true },
          { name: 'Shoulder Taps', duration: 40, videoUrl: '/videos/shoulder-taps.mp4', isBreak: false },
          { name: 'Break', duration: 20, videoUrl: '/videos/break-2.mp4', isBreak: true },

          // Cooldown
          { name: 'Plank', duration: 40, videoUrl: '/videos/plank.mp4', isBreak: false }
        ]
      }
    }
  }
};
