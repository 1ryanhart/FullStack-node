import process from '../util/process';
import validate from '../util/validate';
import path from 'path';
import fs from 'fs';
import routes from '../routes';

describe('Tests for validate function', () => {
  it('should default to 200x200 if no values given', () => {
    expect(validate(null, null)).toEqual({ width: 200, height: 200 });
  });
  it('should parse strings to numbers', () => {
    expect(validate(null, '450')).toEqual({ width: 200, height: 450 });
  });
});

describe('Tests for process function', () => {
  it('should create file if it doesnt exist', async () => {
    const pathFind = path.resolve(__dirname, '../../assets');
    const inPath = path.normalize(`${pathFind}/full/fjord.jpg`);
    const outPath = path.normalize(`${pathFind}/thumb/fjord123x123_thumb.jpg`);

    if (fs.existsSync(outPath)) {
      fs.unlinkSync(outPath);
    }
    await process(123, 123, inPath, outPath);
    expect(fs.existsSync(outPath)).toBeTruthy();
  });
});

describe('Test for api endpoint', () => {
  it('should return 200 status', () => {
    routes.get('/api/images?file=fjord&width=323&height=222', (req, res) => {
      expect(res.status).toEqual(200);
    });
  });
  it('should return 404 error status', () => {
    routes.get('/api/images?file=nothere&width=323&height=222', (req, res) => {
      expect(res.status).toEqual(404);
    });
  });
});
