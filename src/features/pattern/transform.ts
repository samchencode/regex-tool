interface TransformParameters {
  input: string;
  transforms: Array<{
    formatter: (
      pattern: string,
      flags: string[],
      input: string,
      format: string
    ) => string;
    pattern: string;
    flags: string[];
    format: string;
  }>;
}

interface TransformResult {
  result: string;
  error: boolean;
}

const transform = ({ input, transforms }: TransformParameters) =>
  transforms.reduce(
    (ag, { formatter, pattern, flags, format }): TransformResult[] => {
      const prev = ag[ag.length - 1];
      const inputString = prev?.result ?? input;
      let error = null;
      let result;
      try {
        result = formatter(pattern, flags, inputString, format);
      } catch (e) {
        error = e;
        result = e.message;
      }

      return [...ag, {
        result, 
        error,
      }];
    },
    [] as TransformResult[]
  );

export default transform;
