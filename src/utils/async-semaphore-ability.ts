import createAbilityInjector from "custom-ability";
import { BinarySemaphoreAcquireOptions, Semaphore, SemaphoreOptions, SemaphoreTaskItem } from "./async-semaphore";


// TODO: not ready
interface SemaphoreWeightAbility extends Semaphore{};
class SemaphoreWeightAbility {
	declare maxConcurrency: number;
	declare super?: (...args: any[])=>any;
	declare self?: Semaphore;
	protected remainingWeight: number;

	$init(options: SemaphoreOptions) {
		const Super  = this.super;
		const that = this.self || this
		if (Super) {
			Super.call(that, options)
		}
		this.remainingWeight = options.maxConcurrency!;
	}

  _dispatchTask(task: SemaphoreTaskItem & {weight: number}) {
    const previousWeight = this.remainingWeight;
    this.remainingWeight -= task.weight;
    task.resolve([previousWeight, this._newReleaser(task)])
  }

  tryAcquire(options?: BinarySemaphoreAcquireOptions & {weight?: number}) {
    const weight = options?.weight || 1;
    if (weight <= this.remainingWeight) {
      return this.lock(options);
    }
  }
}

export const addWeightToSemaphore = createAbilityInjector(SemaphoreWeightAbility)
