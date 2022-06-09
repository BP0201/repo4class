from unittest import TestCase
from converter import convert, check_validity
from app import app

app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']


class ConverterTestCase(TestCase):
    def test_convert(self):
        self.assertEqual(convert('USD', 'USD', 1), '$1.00')

    def test_validity(self):
        self.assertTrue(check_validity('USD'))
        self.assertFalse(check_validity('XXX'))


