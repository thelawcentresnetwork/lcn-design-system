import { useEffect, useState, useRef } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"

import FocusLock from 'react-focus-lock';

import {
  FormErrorMessage,
  FormLabel,
  Textarea,
  FormControl,
  Popover,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverTrigger,
  ButtonGroup,
  Button,
  Stack,
  Box,
  Text,
  HStack,
  Link,
  useDisclosure
} from "@chakra-ui/react"

import { ChakraAwesome } from 'law-centres-design-system'
import MicroHeader from '~/Elements/MicroHeader'
import { RadioGroup } from '~/Elements/RadioGroup'

function RatingFeedback({ prompt = "Was this helpful?", originType, originId, originUrl, originName }) {

  const [rating, setRating] = useState()

  return (
    <>
      <MicroHeader mb="4">{prompt}</MicroHeader>

      <HStack spacing="3">

        <Popover
          isOpen={rating == 'thumbs-up'}
          onOpen={e => setRating('thumbs-up')}
          onClose={e => setRating(null)}
          placement="top"
          closeOnBlur={true}>
          <PopoverTrigger>
            <Box>
              <ActionButton
                boxShadow="none"
                borderColor='green.100'
                bg={rating == 'thumbs-up' ? 'green.800' : 'green.100'}
                _hover={{ borderColor: 'green.800', bg: 'green.800' }}>
                <ChakraAwesome
                  _groupHover={{ color: 'white', animation: 'bounce 0.75s' }}
                  color={rating == 'thumbs-up' ? 'white' : 'green.800'}
                  icon={['fas', 'thumbs-up']} />
              </ActionButton>
            </Box>
          </PopoverTrigger>
          <PopoverContent p={3} _focus={{ outline: "none" }}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <FeedbackForm
                originType={originType}
                originId={originId}
                originUrl={originUrl}
                originName={originName}
                rating={rating}
                isOpen={rating == 'thumbs-up'}
                placeholder="Great, any other feedback?"
                onCancel={e => setRating(null)} />
            </FocusLock>
          </PopoverContent>
        </Popover>

        <Popover
          isOpen={rating == 'thumbs-down'}
          onOpen={e => setRating('thumbs-down')}
          onClose={e => setRating(null)}
          placement="top"
          closeOnBlur={true}>
          <PopoverTrigger>
            <Box>
              <ActionButton
                borderColor='green.100'
                boxShadow="none"
                bg={rating == 'thumbs-down' ? 'green.800' : 'green.100'}
                _hover={{ borderColor: 'green.800', bg: 'green.800' }}>
                <ChakraAwesome
                  _groupHover={{ color: 'white', animation: 'bounce 0.75s' }}
                  color={rating == 'thumbs-down' ? 'white' : 'green.800'}
                  icon={['fas', 'thumbs-down']} />
              </ActionButton>
            </Box>
          </PopoverTrigger>
          <PopoverContent p={3} _focus={{ outline: "none" }}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <FeedbackForm
                originType={originType}
                originId={originId}
                originUrl={originUrl}
                originName={originName}
                rating={rating}
                placeholder="How could it be improved?"
                isOpen={rating == 'thumbs-down'}
                onCancel={e => setRating(null)} />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </HStack>

    </>
  )
}

function TextFeedback(props) {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onToggle}
      onClose={onToggle}
      placement="bottom"
      closeOnBlur={true}>
      <PopoverTrigger>
        <Box display="inline-block">
          {props.children}
        </Box>
      </PopoverTrigger>
      <PopoverContent p={3} _focus={{ outline: "none" }}>
        <FocusLock returnFocus persistentFocus={false}>
          <PopoverArrow />
          <FeedbackForm
            originUrl={props.originUrl}
            placeholder={props.placeholder}
            originType={props.originType}
            originId={props.originId}
            originName={props.originName}
            confirmation={props.confirmation}
            isOpen={isOpen}
            onCancel={onToggle} />
        </FocusLock>
      </PopoverContent>
    </Popover>
  )
}

function NPSFeedback(props) {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onToggle}
      onClose={onToggle}
      placement="left"
      closeOnBlur={true}>
      <PopoverTrigger>
        <Box display="inline-block">
          {props.children}
        </Box>
      </PopoverTrigger>
      <PopoverContent boxShadow="lg" p={3} _focus={{ outline: "none" }}>
        <FocusLock returnFocus persistentFocus={false}>

          <NPSForm
            originUrl={props.originUrl}
            placeholder={props.placeholder}
            originType={props.originType}
            originId={props.originId}
            originName={props.originName}
            confirmation={props.confirmation}
            isOpen={isOpen}
            onCancel={onToggle} />

        </FocusLock>
      </PopoverContent>
    </Popover>
  )
}

function NPSForm({
  firstFieldRef,
  onCancel,
  confirmation,
  placeholder = 'Feedback, ideas, suggestions...',
  originType, originId, originName, originUrl, isOpen }) {

  const [score, setScore] = useState()
  const [status, setStatus] = useState();
  const { handleSubmit, errors, register, reset, formState: { isSubmitted, isSubmitting } } = useForm();

  useEffect(() => {
    if (!isOpen) reset()
  }, [isOpen])

  const onSubmit = values => {

    return new Promise((resolve) => {
      axios.post('/api/actions/feedback',
        Object.assign(values, {
          tag: originType,
          origin: originName,
          origin_id: originId,
          url: originUrl,
          score: score
        })
      ).then(({ data }) => {
        resolve();
        window.gtag('event', 'nps', { score: score });
        setStatus(confirmation || "Thanks for your feedback, it will be used to inform future updates.")
      })
        .catch(({ err }) => {
          resolve();
          setStatus('Sorry, there was an error submitting your feedback.')
        })
    });

  }

  if (isSubmitted) {
    return (
      <Box p="5" textAlign="center">
        <ChakraAwesome size="3x" mb="2" color="brand.Green" icon={['fas', 'circle-check']} />
        <Text fontSize="sm" fontWeight="600" color="gray.600">{status}</Text>
      </Box>
    )
  } else {
    return (
      <Box p="1" pt="3">
        <form onSubmit={handleSubmit(onSubmit)}>

          <Box textAlign="center" px="5">
            <Text fontSize="sm" color="gray.500" mb="4" pr="4">How likely are you to recommend this platform to a colleague?</Text>
            <RadioGroup name="score" options={['1', '2', '3', '4', '5']} onChange={e => { setScore(e) }} />
          </Box>
          <FormControl isInvalid={errors?.name} pb="4" pt="5">
            <Textarea
              _focus={{ outline: "1px solid brand.Green" }}
              name="feedback"
              size="sm"
              _placeholder={{ color: 'gray.500' }}
              borderRadius="md"
              {...register("feedback")}
              placeholder={placeholder}
            />
          </FormControl>
          <ButtonGroup d="flex" justifyContent="flex-end" mb="1">
            <ActionButton bg="gray.50" color="gray.400" _hover={{ color: 'gray.700' }} onClick={onCancel}>
              Cancel
            </ActionButton>
            <ActionButton
              as="button"
              loadingText="Sending"
              isLoading={isSubmitting}
              bg="brand.Green"
              color="white"
              borderColor="brand.Green"
              fontWeight='600'
              _hover={{ bg: "green.700", borderColor: "green.700" }}
              type="submit">
              <ChakraAwesome mr="3" icon={['fas', 'paper-plane']} color="white" />
              Send
            </ActionButton>
          </ButtonGroup>
        </form>
      </Box>
    )
  }

}

function FeedbackForm({
  firstFieldRef,
  onCancel,
  confirmation,
  placeholder = 'Feedback...',
  rating, originType, originId, originName, originUrl, isOpen }) {

  const [status, setStatus] = useState();
  const { handleSubmit, errors, register, reset, formState: { isSubmitted, isSubmitting } } = useForm();

  useEffect(() => {
    if (!isOpen) reset()
  }, [isOpen])

  const onSubmit = values => {

    return new Promise((resolve) => {
      axios.post('/api/actions/feedback',
        Object.assign(values, {
          tag: originType,
          origin: originName,
          origin_id: originId,
          url: originUrl,
          rating: rating
        })
      ).then(({ data }) => {
        resolve();
        setStatus(confirmation || "Thanks for your feedback, it will be used to inform future updates.")
      })
        .catch(({ err }) => {
          console.log(err)
          resolve();
          setStatus('Sorry, there was an error submitting your feedback.')
        })
    });

  }

  if (isSubmitted) {
    return (
      <Box p="5" textAlign="center">
        <ChakraAwesome size="3x" mb="2" color="brand.Green" icon={['fas', 'circle-check']} />
        <Text fontSize="sm" fontWeight="600" color="gray.600">{status}</Text>
      </Box>
    )
  } else {
    return (
      <Box p="1" pt="3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors?.name} pb="4">
            <Textarea
              _focus={{ outline: "1px solid brand.Green" }}
              name="feedback"
              size="sm"
              _placeholder={{ color: 'gray.500' }}
              borderRadius="md"
              {...register("feedback")}
              placeholder={placeholder}
            />
          </FormControl>
          <ButtonGroup d="flex" justifyContent="flex-end" mb="1">
            <ActionButton bg="gray.50" color="gray.400" _hover={{ color: 'gray.700' }} onClick={onCancel}>
              Cancel
            </ActionButton>
            <ActionButton
              as="button"
              loadingText="Sending"
              isLoading={isSubmitting}
              bg="brand.Green"
              color="white"
              borderColor="brand.Green"
              fontWeight='600'
              _hover={{ bg: "green.700", borderColor: "green.700" }}
              type="submit">
              <ChakraAwesome mr="3" icon={['fas', 'paper-plane']} color="white" />
              Send
            </ActionButton>
          </ButtonGroup>
        </form>
      </Box>
    )
  }

}

export {
  RatingFeedback,
  TextFeedback,
  NPSFeedback
}
