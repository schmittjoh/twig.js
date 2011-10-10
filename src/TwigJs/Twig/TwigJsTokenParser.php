<?php

namespace TwigJs\Twig;

class TwigJsTokenParser extends \Twig_TokenParser
{
    public function parse(\Twig_Token $token)
    {
        $node = new TwigJsNode(array(), array(), $token->getLine(),
            $this->getTag());

        $stream = $this->parser->getStream();
        while (!$stream->test(\Twig_Token::BLOCK_END_TYPE)) {
            if ($stream->test(\Twig_Token::NAME_TYPE, 'name')) {
                $stream->next();
                $stream->expect(\Twig_Token::OPERATOR_TYPE, '=');
                $node->setAttribute('name',
                    $stream->expect(\Twig_Token::STRING_TYPE)->getValue());

                continue;
            }

            $token = $stream->getCurrent();

            throw new \Twig_Error_Syntax(sprintf('Unexpected token "%s" of value "%s"', \Twig_Token::typeToEnglish($token->getType(), $token->getLine()), $token->getValue()), $token->getLine());
        }

        $stream->expect(\Twig_Token::BLOCK_END_TYPE);

        return $node;
    }

    public function getTag()
    {
        return 'twig_js';
    }
}