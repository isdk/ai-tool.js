import type { PipelineType, PretrainedOptions, AllTasks } from "@xenova/transformers";

declare global {
  function pipeline<T extends PipelineType>(task: T, model?: string, { quantized, progress_callback, config, cache_dir, local_files_only, revision, }?: PretrainedOptions): Promise<AllTasks[T]>
  function cos_sim(arr1: number[], arr2: number[]): number
  const Bun: any
}
